#!/usr/bin/env node

/**
 * Script to create Strapi content types via API
 * This bypasses the need for development mode
 */

const STRAPI_URL = 'https://strapi-production-87c5.up.railway.app';
const API_TOKEN = '03b32082e2d6da4d336d3968dc2dfe4a8b3ae5107627517b0aed1818d3e66b4357d7a27b28bacf26a5b91d53a4ccb9fa228e40a2c452108f8962bd063346ec044e4bb041683eb1225946f9c7c589b604f627d3ff28535c2059309f79482bac28d5fba6afdbc9561690c4175e113f3ed5331b6467002b360e74480d1985dd7b34';

// Content type definitions matching our TypeScript interfaces
const contentTypes = [
  {
    singularName: 'focus-area',
    pluralName: 'focus-areas',
    displayName: 'Focus Area',
    description: 'Research focus areas showcased on the homepage',
    attributes: {
      title: {
        type: 'string',
        required: true,
      },
      description: {
        type: 'text',
        required: true,
      },
      link: {
        type: 'string',
        required: true,
      },
      coverImage: {
        type: 'media',
        multiple: false,
        required: false,
        allowedTypes: ['images'],
      },
    },
  },
  {
    singularName: 'technology',
    pluralName: 'technologies',
    displayName: 'Technology',
    description: 'Technologies used at Flo Labs',
    attributes: {
      name: {
        type: 'string',
        required: true,
      },
      icon: {
        type: 'string',
        required: true,
      },
      description: {
        type: 'text',
        required: true,
      },
    },
  },
  {
    singularName: 'about-project',
    pluralName: 'about-projects',
    displayName: 'About Project',
    description: 'Projects featured in the About section',
    attributes: {
      title: {
        type: 'string',
        required: true,
      },
      description: {
        type: 'text',
        required: true,
      },
      image: {
        type: 'media',
        multiple: false,
        required: false,
        allowedTypes: ['images'],
      },
    },
  },
];

async function createContentType(contentType) {
  const response = await fetch(`${STRAPI_URL}/content-type-builder/content-types`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      contentType: {
        ...contentType,
        kind: 'collectionType',
        draftAndPublish: false,
        pluginOptions: {},
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create ${contentType.displayName}: ${response.status} ${error}`);
  }

  return response.json();
}

async function setPublicPermissions() {
  // Get public role ID
  const rolesResponse = await fetch(`${STRAPI_URL}/users-permissions/roles`, {
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
    },
  });

  if (!rolesResponse.ok) {
    throw new Error('Failed to get roles');
  }

  const roles = await rolesResponse.json();
  const publicRole = roles.roles.find(r => r.type === 'public');

  if (!publicRole) {
    throw new Error('Public role not found');
  }

  // Update permissions
  const permissions = {
    ...publicRole.permissions,
    'api::focus-area': {
      controllers: {
        'focus-area': {
          find: { enabled: true },
          findOne: { enabled: true },
        },
      },
    },
    'api::technology': {
      controllers: {
        technology: {
          find: { enabled: true },
          findOne: { enabled: true },
        },
      },
    },
    'api::about-project': {
      controllers: {
        'about-project': {
          find: { enabled: true },
          findOne: { enabled: true },
        },
      },
    },
  };

  const updateResponse = await fetch(`${STRAPI_URL}/users-permissions/roles/${publicRole.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      ...publicRole,
      permissions,
    }),
  });

  if (!updateResponse.ok) {
    const error = await updateResponse.text();
    console.warn(`Warning: Failed to set public permissions: ${error}`);
  }

  return updateResponse.ok;
}

async function main() {
  console.log('🚀 Creating Strapi content types...\n');

  for (const contentType of contentTypes) {
    try {
      console.log(`Creating ${contentType.displayName}...`);
      await createContentType(contentType);
      console.log(`✅ ${contentType.displayName} created successfully\n`);
    } catch (error) {
      console.error(`❌ ${error.message}\n`);
    }
  }

  console.log('Setting public permissions...');
  try {
    await setPublicPermissions();
    console.log('✅ Public permissions set\n');
  } catch (error) {
    console.error(`❌ ${error.message}\n`);
  }

  console.log('✨ Setup complete!');
  console.log('\nNext steps:');
  console.log('1. Go to Strapi admin: https://strapi-production-87c5.up.railway.app/admin');
  console.log('2. Restart Strapi for changes to take effect');
  console.log('3. Start adding content to your collections');
}

main().catch(console.error);

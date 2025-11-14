import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use Next.js 15+ native flat config support
const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**"],
  },
];

export default eslintConfig;

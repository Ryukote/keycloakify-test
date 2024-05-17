// vite.config.ts
import { defineConfig } from "file:///C:/Users/ahaluzan/source/repos/keycloakify-starter/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/ahaluzan/source/repos/keycloakify-starter/node_modules/@vitejs/plugin-react/dist/index.mjs";
import commonjs from "file:///C:/Users/ahaluzan/source/repos/keycloakify-starter/node_modules/vite-plugin-commonjs/dist/index.mjs";
import { keycloakify } from "file:///C:/Users/ahaluzan/source/repos/keycloakify-starter/node_modules/keycloakify/vite-plugin/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    commonjs(),
    keycloakify({
      // See: https://docs.keycloakify.dev/build-options#themename
      themeName: "keycloakify-starter",
      // See: https://docs.keycloakify.dev/environnement-variables
      extraThemeProperties: [
        "MY_ENV_VARIABLE=${env.MY_ENV_VARIABLE:}"
      ],
      // This is a hook that will be called after the build is done
      // but before the jar is created.  
      // You can use it to add/remove/edit your theme files.  
      postBuild: async (keycloakifyBuildOptions) => {
        const fs = await import("fs/promises");
        const path = await import("path");
        await fs.writeFile(
          path.join(keycloakifyBuildOptions.keycloakifyBuildDirPath, "foo.txt"),
          Buffer.from(
            [
              "This file was created by the postBuild hook of the keycloakify vite plugin",
              "",
              "Resolved keycloakifyBuildOptions:",
              "",
              JSON.stringify(keycloakifyBuildOptions, null, 2),
              ""
            ].join("\n"),
            "utf8"
          )
        );
      }
    })
  ],
  /* 
   * Uncomment this if you want to use the default domain provided by GitHub Pages
   * replace "keycloakify-starter" with your repository name.  
   * This is only relevent if you are building an Wep App + A Keycloak theme.
   * If you are only building a Keycloak theme, you can ignore this.  
   */
  //base: "/keycloakify-starter/"
  build: {
    sourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhaGFsdXphblxcXFxzb3VyY2VcXFxccmVwb3NcXFxca2V5Y2xvYWtpZnktc3RhcnRlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWhhbHV6YW5cXFxcc291cmNlXFxcXHJlcG9zXFxcXGtleWNsb2FraWZ5LXN0YXJ0ZXJcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FoYWx1emFuL3NvdXJjZS9yZXBvcy9rZXljbG9ha2lmeS1zdGFydGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG4vLyBOT1RFOiBUaGlzIGlzIGp1c3QgZm9yIHRoZSBLZXljbG9ha2lmeSBjb3JlIGNvbnRyaWJ1dG9ycyB0byBiZSBhYmxlIHRvIGR5bmFtaWNhbGx5IGxpbmtcclxuLy8gdG8gYSBsb2NhbCB2ZXJzaW9uIG9mIHRoZSBrZXljbG9ha2lmeSBwYWNrYWdlLiBUaGlzIGlzIG5vdCBuZWVkZWQgZm9yIG5vcm1hbCB1c2FnZS5cclxuaW1wb3J0IGNvbW1vbmpzIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21tb25qc1wiO1xyXG5pbXBvcnQgeyBrZXljbG9ha2lmeSB9IGZyb20gXCJrZXljbG9ha2lmeS92aXRlLXBsdWdpblwiO1xyXG5cclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSwgXHJcbiAgICBjb21tb25qcygpLCBcclxuICAgIGtleWNsb2FraWZ5KHtcclxuICAgICAgLy8gU2VlOiBodHRwczovL2RvY3Mua2V5Y2xvYWtpZnkuZGV2L2J1aWxkLW9wdGlvbnMjdGhlbWVuYW1lXHJcbiAgICAgIHRoZW1lTmFtZTogXCJrZXljbG9ha2lmeS1zdGFydGVyXCIsXHJcbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9kb2NzLmtleWNsb2FraWZ5LmRldi9lbnZpcm9ubmVtZW50LXZhcmlhYmxlc1xyXG4gICAgICBleHRyYVRoZW1lUHJvcGVydGllczogW1xyXG4gICAgICAgIFwiTVlfRU5WX1ZBUklBQkxFPSR7ZW52Lk1ZX0VOVl9WQVJJQUJMRTp9XCJcclxuICAgICAgXSxcclxuICAgICAgLy8gVGhpcyBpcyBhIGhvb2sgdGhhdCB3aWxsIGJlIGNhbGxlZCBhZnRlciB0aGUgYnVpbGQgaXMgZG9uZVxyXG4gICAgICAvLyBidXQgYmVmb3JlIHRoZSBqYXIgaXMgY3JlYXRlZC4gIFxyXG4gICAgICAvLyBZb3UgY2FuIHVzZSBpdCB0byBhZGQvcmVtb3ZlL2VkaXQgeW91ciB0aGVtZSBmaWxlcy4gIFxyXG4gICAgICBwb3N0QnVpbGQ6IGFzeW5jIGtleWNsb2FraWZ5QnVpbGRPcHRpb25zID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZnMgPSBhd2FpdCBpbXBvcnQoXCJmcy9wcm9taXNlc1wiKTtcclxuICAgICAgICBjb25zdCBwYXRoID0gYXdhaXQgaW1wb3J0KFwicGF0aFwiKTtcclxuXHJcbiAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKFxyXG4gICAgICAgICAgcGF0aC5qb2luKGtleWNsb2FraWZ5QnVpbGRPcHRpb25zLmtleWNsb2FraWZ5QnVpbGREaXJQYXRoLCBcImZvby50eHRcIiksXHJcbiAgICAgICAgICBCdWZmZXIuZnJvbShcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICBcIlRoaXMgZmlsZSB3YXMgY3JlYXRlZCBieSB0aGUgcG9zdEJ1aWxkIGhvb2sgb2YgdGhlIGtleWNsb2FraWZ5IHZpdGUgcGx1Z2luXCIsIFxyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICBcIlJlc29sdmVkIGtleWNsb2FraWZ5QnVpbGRPcHRpb25zOlwiLFxyXG4gICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShrZXljbG9ha2lmeUJ1aWxkT3B0aW9ucywgbnVsbCwgMiksXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgXS5qb2luKFwiXFxuXCIpLFxyXG4gICAgICAgICAgICBcInV0ZjhcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgLyogXHJcbiAgICogVW5jb21tZW50IHRoaXMgaWYgeW91IHdhbnQgdG8gdXNlIHRoZSBkZWZhdWx0IGRvbWFpbiBwcm92aWRlZCBieSBHaXRIdWIgUGFnZXNcclxuICAgKiByZXBsYWNlIFwia2V5Y2xvYWtpZnktc3RhcnRlclwiIHdpdGggeW91ciByZXBvc2l0b3J5IG5hbWUuICBcclxuICAgKiBUaGlzIGlzIG9ubHkgcmVsZXZlbnQgaWYgeW91IGFyZSBidWlsZGluZyBhbiBXZXAgQXBwICsgQSBLZXljbG9hayB0aGVtZS5cclxuICAgKiBJZiB5b3UgYXJlIG9ubHkgYnVpbGRpbmcgYSBLZXljbG9hayB0aGVtZSwgeW91IGNhbiBpZ25vcmUgdGhpcy4gIFxyXG4gICAqL1xyXG4gIC8vYmFzZTogXCIva2V5Y2xvYWtpZnktc3RhcnRlci9cIlxyXG4gIGJ1aWxkOiB7XHJcbiAgICBzb3VyY2VtYXA6IHRydWVcclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1YsU0FBUyxvQkFBb0I7QUFDalgsT0FBTyxXQUFXO0FBR2xCLE9BQU8sY0FBYztBQUNyQixTQUFTLG1CQUFtQjtBQUk1QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxZQUFZO0FBQUE7QUFBQSxNQUVWLFdBQVc7QUFBQTtBQUFBLE1BRVgsc0JBQXNCO0FBQUEsUUFDcEI7QUFBQSxNQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJQSxXQUFXLE9BQU0sNEJBQTJCO0FBRTFDLGNBQU0sS0FBSyxNQUFNLE9BQU8sYUFBYTtBQUNyQyxjQUFNLE9BQU8sTUFBTSxPQUFPLE1BQU07QUFFaEMsY0FBTSxHQUFHO0FBQUEsVUFDUCxLQUFLLEtBQUssd0JBQXdCLHlCQUF5QixTQUFTO0FBQUEsVUFDcEUsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsY0FDQSxLQUFLLFVBQVUseUJBQXlCLE1BQU0sQ0FBQztBQUFBLGNBQy9DO0FBQUEsWUFDQSxFQUFFLEtBQUssSUFBSTtBQUFBLFlBQ1g7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BRUY7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQSxFQUNiO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

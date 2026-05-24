// vite.config.ts
import { defineConfig } from "file:///sessions/determined-festive-keller/mnt/Claude/Projects/Personal%20Portfolio/node_modules/vite/dist/node/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
var __vite_injected_original_import_meta_url = "file:///sessions/determined-festive-keller/mnt/Claude/Projects/Personal%20Portfolio/vite.config.ts";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": new URL("./src", __vite_injected_original_import_meta_url).pathname
    }
  },
  server: {
    port: 5173,
    open: true,
    strictPort: false
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          "github-api": ["src/utils/github.ts"]
        }
      }
    }
  },
  preview: {
    port: 4173
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvZGV0ZXJtaW5lZC1mZXN0aXZlLWtlbGxlci9tbnQvQ2xhdWRlL1Byb2plY3RzL1BlcnNvbmFsIFBvcnRmb2xpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2RldGVybWluZWQtZmVzdGl2ZS1rZWxsZXIvbW50L0NsYXVkZS9Qcm9qZWN0cy9QZXJzb25hbCBQb3J0Zm9saW8vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Nlc3Npb25zL2RldGVybWluZWQtZmVzdGl2ZS1rZWxsZXIvbW50L0NsYXVkZS9Qcm9qZWN0cy9QZXJzb25hbCUyMFBvcnRmb2xpby92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgeyBkaXJuYW1lIH0gZnJvbSAncGF0aCc7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogbmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lLFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUxNzMsXG4gICAgb3BlbjogdHJ1ZSxcbiAgICBzdHJpY3RQb3J0OiBmYWxzZSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgJ2dpdGh1Yi1hcGknOiBbJ3NyYy91dGlscy9naXRodWIudHMnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDQxNzMsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1osU0FBUyxvQkFBb0I7QUFDL2EsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxlQUFlO0FBRm9PLElBQU0sMkNBQTJDO0FBSTdTLElBQU0sYUFBYSxjQUFjLHdDQUFlO0FBQ2hELElBQU0sWUFBWSxRQUFRLFVBQVU7QUFFcEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxJQUFJLElBQUksU0FBUyx3Q0FBZSxFQUFFO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osY0FBYyxDQUFDLHFCQUFxQjtBQUFBLFFBQ3RDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

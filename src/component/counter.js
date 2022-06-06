const Counter = {

        data() {
          return {
            count: 0
          }
        },
        template: `
          <button @click="count++">
            You clicked me {{ count }} times.
          </button>
        `
};

// export { Counter, };  // 不能通过 file:// URL 运行 JS 模块 — 这将导致 CORS 错误。你需要通过 HTTP 服务器运行。
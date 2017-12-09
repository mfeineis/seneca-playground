import * as seneca from "seneca";

import simple from "./plugins/simple";

const app = seneca()
    .use(simple)
    .listen();

// node micro-service.js &
// curl "http://localhost:10101/act?role=simple&cmd=foo&text=red"

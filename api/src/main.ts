import * as seneca from "seneca";

import simple from "./plugins/simple";

const app = seneca()
    .use(simple)
    .act({
        role: "simple",
        cmd: "foo",
        text: "red",
    }, console.log);
    //.act("role:simple,cmd:foo,text:red", console.log);


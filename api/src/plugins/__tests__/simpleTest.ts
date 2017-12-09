import test from "ava";

import * as seneca from "seneca";

import simple from "../simple";

test.cb('simple', t => {
    t.plan(1);

    seneca({ log:'silent', errhandler(err) { t.fail(err.message) } })
        .use(simple)
        .act({ role: "simple", cmd: "foo", text: "red" }, (err, out) => {
            if (err) {
                return t.fail(err.message);
            }

            t.is(out.text, "foo-red-zed");
            t.end();
        });

});

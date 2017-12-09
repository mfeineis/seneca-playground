
export default function simple(this: any, options: any) {
    const seneca = this;
    //seneca.add("role:simple,cmd:foo", cmd_foo);
    seneca.add({ role: "simple", cmd: "foo" }, cmd_foo);
    seneca.add({ init: "simple" }, init);

    let suffix = '';

    function cmd_foo(args: any, done: Function) {
        done(null, { text: "foo-" + args.text + suffix });
    }

    function init(this: any, args: any, done: Function) {
        const seneca = this;
        seneca.log.info("preparing something...");

        setTimeout(function () {
            suffix = "-zed";
            seneca.log.info("ready!");
            done();
        }, 1000)
    }
}

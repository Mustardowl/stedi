import sayHello from "../utils/helloarianne.mjs";
import assert from 'assert';

it ("Tests Hello Arianne", ()=>{
    const hello = sayHello();
    assert.equal(hello, "Hello Arianne");
});
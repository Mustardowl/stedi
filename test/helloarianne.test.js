import sayHellos from "../utils/helloarianne.mjs";
import assert from 'assert';

it ("Tests Hello Arianne", ()=>{
    const hello = sayHellos();
    assert.equal(hello, "Hello Arianne");
});
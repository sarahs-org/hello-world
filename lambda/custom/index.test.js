const va = require('virtual-alexa');

beforeAll(() => {
    alexa = va.VirtualAlexa.Builder()
        .handler("./index.handler")
        .interactionModelFile("../../models/en-GB.json")
        .create();
});


test("test launch the skill ", async () => {
    let launchResponse = await alexa.launch();

    expect(launchResponse.response.outputSpeech.ssml)
        .toContain("Welcome to the Alexa Skills Kit, you can say hello!");

});
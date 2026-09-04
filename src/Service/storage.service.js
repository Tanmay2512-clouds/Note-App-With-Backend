const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({

    privateKey : "private_uoL4rQtxdHnrHV2+uy5dIg1zJyk="
})

async function uploadFile(buffer){
    const result = await imagekit.client.upload({
        file:buffer,
        fileName:"image.png"
    })
    return result;
}

module.exports = uploadFile;
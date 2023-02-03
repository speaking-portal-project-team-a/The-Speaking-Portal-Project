/*
For internal use only - just programmatically toggles layers and exports images
When new layers are added, these layers must be updated.

Please note Photoshops scripting language is based on an ancient version of javascript, so there's no handy array
functions

This script can be run by going to Photoshop -> File -> Scripts -> Browse & selecting this script. Because it is built
for my system, you will also have to update the file path.
 */
var doc = app.activeDocument
const phonemes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'X']
const eyes = ['blink', 'open']
const arms = ['default', 'relaxed']
const toggleableLayer = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'X', 'blink', 'open', 'default', 'relaxed']
doc.resizeImage(doc.width / 2, doc.height / 2)
var pngOptions = new PNGSaveOptions()
pngOptions.compression = 0

// const toggleableLayer = phonemes.concat(eyes.concat(arms))

for (var eye = 0; eye < eyes.length; eye++) {
    for (var phoneme = 0; phoneme < phonemes.length; phoneme++) {
        for (var arm = 0; arm < arms.length; arm++) {
            var activeLayers = [phonemes[phoneme], eyes[eye], arms[arm]]

            for (var i = 0; i < doc.layers.length; i++) {
                var currentLayer = doc.layers[i]

                if (includes(toggleableLayer, currentLayer.name))
                    currentLayer.visible = !!includes(activeLayers, currentLayer.name)
            }

            var fileTitle =
                '/Users/lparker/Documents/School/Year 4/COSC499/' +
                'The-Speaking-Portal-Project/speaking-portal-project/images/' +
                phonemes[phoneme] +
                '_' +
                eyes[eye] +
                '_' +
                arms[arm] +
                '.png'
            doc.saveAs(new File(fileTitle), pngOptions, true, Extension.LOWERCASE)
        }
    }
}

function includes(array, layerString) {
    for (var j = 0; j < array.length; j++) {
        if (array[j] === layerString) {
            return true
        }
    }
    return false
}

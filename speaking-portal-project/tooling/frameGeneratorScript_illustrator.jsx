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
const arms = ['default', 'relaxed', 'pos1', 'pos2']
const legs = ['legsDefault', 'legsRelaxed', 'legsPos1', 'legsPos2']
const toggleableLayer = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'X', 'blink', 'open', 'default', 'relaxed', 'pos1', 'pos2', 'legsDefault', 'legsRelaxed', 'legsPos1', 'legsPos2']
// const toggleableLayer = phonemes.concat(eyes.concat(arms))

for (var eye = 0; eye < eyes.length; eye++) {
    for (var phoneme = 0; phoneme < phonemes.length; phoneme++) {
        for (var arm = 0; arm < arms.length; arm++) {
            var activeLayers = [phonemes[phoneme], eyes[eye], arms[arm], legs[arm]]

            for (var i = 0; i < app.activeDocument.layers.length; i++) {
                if (includes(toggleableLayer, app.activeDocument.layers[i].name))
                    app.activeDocument.layers[i].visible = !!includes(activeLayers, app.activeDocument.layers[i].name)
            }

            var fileDest =
                // '/Users/lparker/Documents/School/Year 4/COSC499/' +
                // 'The-Speaking-Portal-Project/speaking-portal-project/images/' +
                'C:\\Users\\Veron\\OneDrive\\Desktop\\barbimages\\' +
                phonemes[phoneme] +
                '_' +
                eyes[eye] +
                '_' +
                arms[arm]
            exportFileToPNG24(fileDest)
            // app.activeDocument.saveAs(new File(fileTitle), pngOptions, true, Extension.LOWERCASE)
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
function exportFileToPNG24(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsPNG24()
        exportOptions.antiAliasing = false
        exportOptions.transparency = false
        exportOptions.artBoardClipping = true
        var type = ExportType.PNG24
        var fileSpec = new File(dest)

        app.activeDocument.exportFile(fileSpec, type, exportOptions)
    }
}
function hideLayer(doc, name) {
    doc.layers.getByName(name).visible = false
}

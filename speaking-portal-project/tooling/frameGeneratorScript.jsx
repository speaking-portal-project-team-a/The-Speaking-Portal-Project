/*
For internal use only - just programmatically toggles layers and exports images
When new layers are added, these layers must be updated.

Please note Photoshop/Illustrators scripting language is based on an ancient version of javascript, 
so there's no handy array functions. Please view: https://ai-scripting.docsforadobe.dev for reference 

This script can be run by going to Illustrator -> File -> Scripts -> Browse & selecting this script. you will also have 
to update the file path based on your system.
 */
const phonemes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'X']
const eyes = ['blink', 'open']
const arms = ['default', 'relaxed', 'pos1', 'pos2']
const legs = ['legsDefault', 'legsRelaxed', 'legsPos1', 'legsPos2']
// This array must contain all layers that are updatable, as we don't want to be toggling layers which remain static
const toggleableLayer = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'X',
    'blink',
    'open',
    'default',
    'relaxed',
    'pos1',
    'pos2',
    'legsDefault',
    'legsRelaxed',
    'legsPos1',
    'legsPos2',
]
// To add more toggleable layers, you will need to add yet another for loop.
// Not the most efficient solution, but a solution nevertheless 
for (var eye = 0; eye < eyes.length; eye++) {
    for (var phoneme = 0; phoneme < phonemes.length; phoneme++) {
        for (var arm = 0; arm < arms.length; arm++) {
            var activeLayers = [phonemes[phoneme], eyes[eye], arms[arm], legs[arm]]

            for (var i = 0; i < app.activeDocument.layers.length; i++) {
                if (includes(toggleableLayer, app.activeDocument.layers[i].name))
                    app.activeDocument.layers[i].visible = !!includes(activeLayers, app.activeDocument.layers[i].name)
            }

            var fileDest =
                'C:\\Users\\Veron\\OneDrive\\Desktop\\barbimages\\' +
                phonemes[phoneme] +
                '_' +
                eyes[eye] +
                '_' +
                arms[arm]
            exportFileToPNG24(fileDest)
        }
    }
}
// Custom includes function to replace the standard JS one
function includes(array, layerString) {
    for (var j = 0; j < array.length; j++) {
        if (array[j] === layerString) {
            return true
        }
    }
    return false
}
// Update export options here. Transparency is currently set to false because MP4s have no
// transparency support.
function exportFileToPNG24(dest) {
    if (app.documents.length > 0) {
        var exportOptions = new ExportOptionsPNG24()
        exportOptions.antiAliasing = true
        exportOptions.transparency = false
        exportOptions.artBoardClipping = true
        var type = ExportType.PNG24
        var fileSpec = new File(dest)

        app.activeDocument.exportFile(fileSpec, type, exportOptions)
    }
}

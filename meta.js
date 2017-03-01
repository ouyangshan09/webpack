/**
 * Created by OUYANG on 2017/3/1.
 */

module.exports = {

    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Project name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "person skill project"
        },
        "author": {
            "type": "string",
            "message": "author"
        },
        "completeMessage": "To get started:\n\n {{^inPlace}}cd {{destDirName}}\n "
    }
};
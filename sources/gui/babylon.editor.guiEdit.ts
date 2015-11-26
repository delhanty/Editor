﻿module BABYLON.EDITOR.GUI {


    export class GUIEditForm extends GUIElement {
        // Public members

        // Private members
        private _datElement: dat.GUI;

        /**
        * Constructor
        * @param name: the form name
        */
        constructor(name: string, core: EditorCore) {
            super(name, core);
        }

        // Removes the element
        public remove(): void {
            this._datElement.domElement.remove();
        }

        // Add a folder
        public addFolder(name, parent?: dat.IFolderElement): dat.IFolderElement {
            var parentFolder: dat.IFolderCreator = parent ? parent : this._datElement;

            var folder = parentFolder.addFolder(name);
            folder.open();

            return folder;
        }

        // Add a field
        public add(object: Object, propertyPath: string, name: string): dat.IGUIElement {
            return this._datElement.add(object, propertyPath).name(name).onchange(() => {

            });
        }

        // Get / Set width
        public set width(width: number) {
            this._datElement.width = width;
        }

        public get width() {
            return this._datElement.width;
        }

        // Get / Set height
        public set height(height: number) {
            this._datElement.height = height;
        }

        public get height() {
            return this._datElement.height;
        }

        // Build element
        public buildElement(parent: string): void {
            var parentElement = $("#" + parent);

            this._datElement = new dat.GUI({
                autoPlace: false
            });

            this._datElement.width = parentElement.width();

            this.element = <any>parentElement[0].appendChild(this._datElement.domElement);
        }
    }
}
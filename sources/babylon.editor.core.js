var BABYLON;
(function (BABYLON) {
    var EDITOR;
    (function (EDITOR) {
        var EditorCore = (function () {
            /**
            * Constructor
            * @param canvasID: the id of the canvas to render the editor scenes
            */
            function EditorCore() {
                // Public members
                this.engine = null;
                this.canvas = null;
                this.scenes = new Array();
                this.updates = new Array();
                this.eventReceivers = new Array();
                this.editor = null;
            }
            /**
            * On pre update
            */
            EditorCore.prototype.onPreUpdate = function () {
                for (var i = 0; i < this.updates.length; i++) {
                    this.updates[i].onPreUpdate();
                }
            };
            /**
            * On post update
            */
            EditorCore.prototype.onPostUpdate = function () {
                for (var i = 0; i < this.updates.length; i++) {
                    this.updates[i].onPostUpdate();
                }
            };
            /**
            * Send an event to the event receivers
            */
            EditorCore.prototype.sendEvent = function (event) {
                for (var i = 0; i < this.eventReceivers.length; i++)
                    this.eventReceivers[i].onEvent(event);
            };
            /**
            * IDisposable
            */
            EditorCore.prototype.dispose = function () {
            };
            return EditorCore;
        })();
        EDITOR.EditorCore = EditorCore;
    })(EDITOR = BABYLON.EDITOR || (BABYLON.EDITOR = {}));
})(BABYLON || (BABYLON = {}));

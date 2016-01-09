import { CLASS_NAMES } from '../../../constants/GridConstants';
import { prefix } from '../../../util/prefix';

export default class DragAndDropManager {
    constructor(plugins, store, events, columns) {

    }

    initDragable(initialProps) {

        const defaults = {
            onDragStart: this.handleDragStart,
            onDrag: this.handleDrag,
            onDragOver: this.handleDragOver,
            onDragLeave: this.handleDragLeave,
            onDragEnd: this.handleDragEnd,
            onDrop: this.handleDrop,
            draggable: true,
            className: prefix(CLASS_NAMES.DRAG_HANDLE)
        };

        const props = initialProps
            ? Object.assign(defaults, initialProps) : defaults;

        return props;
    }

    handleDragStart(reactEvent) {

    }

    handleDrag(reactEvent) {
        // reactEvent.preventDefault();
    }

    handleDragOver(reactEvent) {
        reactEvent.preventDefault();
    }

    handleDragLeave(reactEvent) {
        // reactEvent.preventDefault();
    }

    handleDragEnd(reactEvent) {
        // reactEvent.preventDefault();
    }

    handleDrop(reactEvent) {
        // reactEvent.preventDefault();
    }
}
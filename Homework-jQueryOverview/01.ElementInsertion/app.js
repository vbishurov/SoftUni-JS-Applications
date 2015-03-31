function addElement(elementToAdd,elementToAppendTo,prepend) {
    if (prepend !== true && prepend !== false) {
        prepend = false;
    }

    if (prepend) {
        $(elementToAdd).prependTo($(elementToAppendTo));
    } else {
        $(elementToAdd).appendTo($(elementToAppendTo));
    }
}
class ReferenceList {
    constructor() {
        let this.size = 0;
        let this.entries = [];
    }
    addValue(value, index) {
        for (let entry of this.entries) {
            if (entry["index"] === index) return false;
        }
        this.entries.push({ "value": value, "index": index })
        return true;
    }
    valueAt(index) {
        for (let entry of this.entries) {
            if (entry["index"] === index) return entry["value"];
        }
        return null;
    }
    valuesAsArray() {
        let values = [];
        for (let entry of this.entries) values.push(entry["value"]);
        return values;
    }
    indicesAsArray() {
        let indices = [];
        for (let entry of this.entries) indices.push(entry["index"]);
        return indices;
    }
    hasValueAt(index) {
        for (let entry of this.entries) {
            if (entry["index"] === index) return true;
        }
        return false;
    }
    contains(value) {
        for (let entry of this.entries) {
            if (entry["value"] === value) return true;
        }
        return false;
    }
}

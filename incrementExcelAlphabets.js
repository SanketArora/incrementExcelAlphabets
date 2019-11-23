getNextKey = function(key, incrCount = 1) {
	if (key === 'Z' || key === 'z') {
        return String.fromCharCode(key.charCodeAt() - 25) + String.fromCharCode(key.charCodeAt() - (26 - incrCount)); // AA or aa
    } else {
        while (incrCount >= 1) {
        	if (incrCount == 1) {
        		var lastChar = key.slice(-1);
        		var sub = key.slice(0, -1);
        		if (lastChar === 'Z' || lastChar === 'z') {
            		return getNextKey(sub) + String.fromCharCode(lastChar.charCodeAt() - (26 - incrCount));
        		} else {
           			return sub + String.fromCharCode(lastChar.charCodeAt() + incrCount);
        		}
        	} else {
        		return getNextKey(getNextKey(key, 1), incrCount - 1);
        	}
        }
    }
    return key;
}

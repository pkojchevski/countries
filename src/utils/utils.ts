export const uniq = (arr: string[]) => {
    return arr.sort().filter(function(item, pos, ary) {
        return !pos || item !== ary[pos - 1];
    });
}
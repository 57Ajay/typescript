
const ArrayConverter = <T, >(value: T): T[] => {
    return [value];
};
/**
 * function ArrayConverter<T>(value: T): T[]{
 *  return [value];
 * };
 */
ArrayConverter(2);
ArrayConverter("Hello! Ajay");
export default ArrayConverter;
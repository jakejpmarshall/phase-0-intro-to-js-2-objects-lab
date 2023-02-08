const employee = {
    name: "Sam",
    address: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(object, key, value) {
  return { ...object, [key]: value,};
};
    const newEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jake');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};
    destructivelyUpdateEmployeeWithKeyAndValue(employee, "address", '12 Broadway');

function deleteFromEmployeeByKey(obj, key) {
    const { [key]: deleted, ...newObj } = obj;
    return newObj;
};
    deleteFromEmployeeByKey(employee, address);

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
};
destructivelyDeleteFromEmployeeByKey(employee, address);
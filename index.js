/* Your Code Here */

// Function to create an employee record
const createEmployeeRecord = function (employeeData) {
    return {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  };
  
  // Function to process an array of employee data and return an array of employee records
  const createEmployeeRecords = function (employeeData) {
    return employeeData.map(createEmployeeRecord);
  };
  
  // Function to add a timeIn event to an employee's record
  const createTimeInEvent = function (employeeRecord, dateTime) {
    const [date, hour] = dateTime.split(' ');
  
    employeeRecord.timeInEvents.push({
      type: 'TimeIn',
      date: date,
      hour: parseInt(hour, 10),
    });
  
    return employeeRecord;
  };
  
  // Function to add a timeOut event to an employee's record
  const createTimeOutEvent = function (employeeRecord, dateTime) {
    const [date, hour] = dateTime.split(' ');
  
    employeeRecord.timeOutEvents.push({
      type: 'TimeOut',
      date: date,
      hour: parseInt(hour, 10),
    });
  
    return employeeRecord;
  };
  
  // Function to calculate the hours worked on a specific date
  const hoursWorkedOnDate = function (employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(
      (event) => event.date === date
    );
    const timeOutEvent = employeeRecord.timeOutEvents.find(
      (event) => event.date === date
    );
  
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  };
  
  // Function to calculate the wages earned on a specific date
  const wagesEarnedOnDate = function (employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payRate = employeeRecord.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
  };
  
  // Function to calculate the total wages for an employee

  
  // Function to find an employee by their first name
  const findEmployeeByFirstName = function (employeeRecords, firstName) {
    return employeeRecords.find(
      (employee) => employee.firstName === firstName
    );
  };
  
  // Function to calculate the total payroll for all employees
  const calculatePayroll = function (employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employee) => {
      return total + allWagesFor(employee);
    }, 0);
    return totalPayroll;
  };
  
// Function to add a timeIn event to an employee's record

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


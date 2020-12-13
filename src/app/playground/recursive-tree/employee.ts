export class Employee {
    public employeeId!: number;
    public employeeName!: string;
    public managerId!: number;
    public manager: Employee = new Employee;
      public children: Employee[] = [];
      public visible: false = false;
}
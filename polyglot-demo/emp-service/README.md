# emp-service

Simple demo GraphQL written in Java   

### Schema Used in this Example   

https://github.com/jobinesh/oracle-code-one/blob/master/polyglot-demo/emp-service/src/main/resources/schema.graphqls   

### Running the example 

docker build -t emp-service:v1 .  
docker run -p 8080:8080  emp-service:v1   

```
Introspection
-------------

{
  __schema {
    types {
      name
      description
      kind
    }
  }
}



{
  __type(name: "Query") {
    name
    fields {
      name
      args {
        name
        type {
          kind
          name
          ofType {
            name
          }
        }
      }
    }
  }
}


{
  __type(name: "Mutation") {
    name
    fields {
      name
      args {
        name 
        defaultValue
        type {
          kind
          name
          ofType {
            name
          }
        }
      }
    }
  }
}

{
  __type(name: "DepartmentInput") {
    kind
    name
    inputFields {
      name
      description
    }
  }
}

{
  __type(name:"EmployeeFilter"){
    name
    description
    inputFields{
      name
      type {
        name
        description
      }
      description      
    }
    
  }
}


query Department {
  __type(name: "Department") {
    kind
    name
    fields {
      name
      description
      type {
        name
      }
    }
  }
}


query{departments{ __typename, departmentId, departmentName}}
query{departments{ departmentId, departmentName}}
query{departments{departmentId, departmentName,managerId,location{country}, employees{employeeId,email}}} 
query{employeesByFilter(filter:{departmentId:10}){firstName,lastName,departmentId}}
query{employeesByFilter(filter:{departmentId:20,firstName:"Matthew"}){firstName,lastName,departmentId}}  


mutation updateEmployee($empInput: EmployeeInput) {
  updateEmployee(input:$empInput) {
   employeeId
  }
}

{"empInput": {"employeeId": 100,"email": "updated@phoo.com"}}

{
  employees{
    employeeId
    firstName
    lastName
    email
  }
}

```




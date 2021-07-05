# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

    SELECT ProductName, CategoryName
    FROM Products AS P
    JOIN Categories As C
    ON P.CategoryID = C.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

    SELECT OrderID, ShipperName
    FROM Orders as O
    JOIN Shippers as S
    ON O.ShipperID = S.ShipperID
    WHERE O.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

    SELECT ProductName, Quantity
    FROM Products as P
    JOIN OrderDetails as OD
    WHERE P.ProductID = OD.ProductID
    AND OD.OrderID = 10251
    ORDER BY P.ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

    SELECT OrderID, CustomerName as "Customer Name", E.LastName as "Employee's Last Name"
    FROM Orders as O
    JOIN Customers as C
    JOIN Employees as E
    WHERE O.CustomerID = C.CustomerID
    AND O.EmployeeID = E.EmployeeID
    
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

    SELECT CategoryName, COUNT(ProductID) AS 'Count'
    FROM Categories as C
    JOIN Products as P
    WHERE C.CategoryID = P.CategoryID
    GROUP BY CategoryName

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

    SELECT OrderID, SUM(Quantity) as 'Count'
    FROM OrderDetails
    GROUP BY OrderID
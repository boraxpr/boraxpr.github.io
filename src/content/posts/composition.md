---

title: 'Object Oriented Programming as intended by the original creator, Alan Kay'
published: 2024-04-20
---

In object oriented programming, It's widely taught, misunderstood, misused that inheritance is "the basic building block" of OOP by the books.

It's undeniable that most courses, whether it is an online course or university course, placed a lot of emphasis on inheritance making every new programmer think that Object Oriented Programming is about inheritance.

They always give examples like there is Animal then we need to create a Dog, a Cat, etc. That's literally the first example, the first step of learning OOP everywhere.

Visiting any tutorials or textbooks, 99.99% of the time, you will find that they talk about inheritance and they would give you an example similar to this:

```java
class Car {
  private String color;
  private String brand;
  private String model;

  public void drive() {
    System.out.println("Driving");
  }

  public void fillFuel() {
    System.out.println("Filling fuel");
  }
}

class SportsCar extends Car {
  private String engineType;
  public void startEngine() {
    System.out.println("Starting engine");
  }
}

class LuxuryCar extends Car {
  private String engineType;
  public void startEngine() {
    System.out.println("Starting engine");
  }
}
```

## The Problem with Inheritance

The problem with inheritance is, it locks down the code forever. Says, one day there is a new type of car that do not play well with the traditional Car. Like an EV car that requires a whole new way to fill fuel. EV cars need to be charged instead of using Gasoline. That's when inheritance fails. Because it voids the Open/Closed Principle.

> a class should be open for extension but closed for modification.
> The deeper into the class hierarchy,
> the more difficult it is to add new features.
> the more difficult it is to change existing features.
> the more chances it is to introduce new bugs.

Voiding the Open/Closed Principle, it's the best way to create a spaghetti code destroying multiple of normally working classes at once. Now, the base class will be the single point of failure, god object.

## The Composition Approach

Inheritance is "is a" and composition is "has a". Instead of fixate on how something is, we create room for composition. Now we design classes based on what they has.

```java

class Car {
  private String color;
  private String brand;
  private String model;
}

interface Driveable{
  default void drive() {
    System.out.println("Driving");
  }
}

interface Fuelable{
  void fillFuel();
  default void startEngine() {
    System.out.println("Starting fuel engine");
  }
}

interface Chargeable{
  void charge();
  default void startEngine() {
    System.out.println("Starting electric engine");
  }
}

class sportsCar extends Car implements Driveable, Fuelable {
}

class EVCar extends Car implements Driveable, Chargeable {
}

```

Utilizing strategy pattern, we can create classes based on what they has. This design has the advantage of being modular and reusable.
However, as you can see, it still uses inheritance.
For maximize the flexibility, never tie any cars to the Car class.

```java
class Car {
  private String color;
  private String brand;
  private String model;
}

interface Driveable{
  default void drive(Car car) {
    System.out.println("Driving");
  }
}

interface Fuelable{
  void fillFuel(Car car);
  default void startEngine(Car car) {
    System.out.println("Starting fuel engine");
  }
}

interface Chargeable{
  void charge(Car car);
  default void startEngine(Car car) {
    System.out.println("Starting electric engine");
  }
}

class sportsCar implements Driveable, Fuelable {
}

class EVCar implements Driveable, Chargeable {
}

class HybridCar implements Driveable, Fuelable, Chargeable {
  public void startEngine(Car car) {
    System.out.println("Starting hybrid engine");
  }
}

```

Another thing that we can do is, we can use generic type to allow interfaces to be more flexible. 

```java

class Car {
  private String color;
  private String brand;
  private String model;
}

class Bike {
  private String color;
  private String brand;
  private String model;
}

interface Driveable<T> {
  default void drive(T self) {
    System.out.println("Driving");
  }
}

interface Fuelable<T> {
  void fillFuel(T self);
  default void startEngine(T self) {
    System.out.println("Starting fuel engine");
  }
}

interface Chargeable<T> {
  void charge(T self);
  default void startEngine(T self) {
    System.out.println("Starting electric engine");
  }
}

class sportsCar implements Driveable<Car>, Fuelable<Car> {
}

class roadBike implements Driveable<Bike>, Fuelable<Bike> {
}

```

Instead of fixing these interfaces to allow just Car, we can use generic type. This opens up new possibilities of implementing by other types. For example, Bike that can also implement Driveable (Not a Car).

## Benefits of Composition

Now, any new class can be flexibly created based on what they have without any lockdown that you are going to inherit from a specific class (Never need to modify deep in the class hierarchy ever again).

Composition makes Loose Coupling possible while adhere to Open/Closed Principle.

## Inheritance has its place

Inheritance can be used to avoid attribute duplication.

```java
class Machinery {
  private String weight;
  private boolean isWorking; 
  private boolean isAutomata;
}

class Car extends Machinery {
  private String color;
  private String brand;
  private String model;
}
```

Inheritance should not be used for behavior in object-oriented programming. Doing so leads to tight coupling, a rigid class hierarchy, and spaghetti-unmaintainable code. Many developers mistakenly use inheritance for behavior, considering it as true object-oriented programming. However, in true object-oriented programming, inheritance is used to model relationships between objects. Objects interact with each other through messages and method calls, emphasizing meaningful relationships and interactions over organizing code around data structures and operations.

Let's write the maintainable, reusable, testable code by using OOP as intended by the original creator.

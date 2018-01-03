package com.cddzmitry;

//inheriting from animal
public class Dog extends Animal {
//    specify its own fields in class for a dog
    private int eyes;
    private int legs;
    
//    call Animal with dog
    public Dog(String name, int brain, int body, int size, int weight) {
//        passing super values from parent Animal class
        super(name, brain, body, size, weight);
    }
}

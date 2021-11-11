package com.company;

import java.util.HashMap;

public class StudentTest {

    HashMap<String, Integer> students = new HashMap<String, Integer>();

    public StudentTest (){
        students.put("Jerome Kithinji", 90);
        students.put("Alex Wower", 93);
        students.put("Helen Khor", 68);
        students.put("Salim Ali", 46);
        students.put("Ish Sagay", 50);
        students.put("Wei Tong", 71);
        students.put("Sarah Holland", 88);
        students.put("Noor Atachu", 98);
        students.put("Shaun Karanja", 100);
    }

    public int averageTestScore() {
        int total = 0;
        for (int i : students.values()) {
            total += i;
        }
        System.out.println(total / students.size());
        return (total / students.size());
    }


    public int highestTestScore() {
        int highest = 0;
        for (int i : students.values()) {
            if (i > highest) highest = i;
        }
        System.out.println(highest);
        return highest;
    }

    public int lowestTestScore() {
        int lowest = highestTestScore();
        for (int i : students.values()) {
            if (i < lowest) lowest = i;
        }
        System.out.println(lowest);
        return lowest;
    }
}

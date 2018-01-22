package com;

import java.io.StringBufferInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

public class Demo6 {
	/*
	 * create table my_student( rno int(10) primary key, name varchar(20), marks
	 * int(10) );
	 */

	public static void main(String[] args) {

		try {

			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "root");
			Statement stmt = con.createStatement();
			String qry = "select e.emp_id,e.emp_name,e.salary ";

			ResultSet rs = stmt.executeQuery(qry);
			while (rs.next()) {

				System.out.println("EMp Id: " + rs.getString(1));
				System.out.println("Emp Name: " + rs.getString(2));
				System.out.println("Salary: " + rs.getString(3));
				System.out.println("Dept Id: " + rs.getString(4));
				System.out.println("Dept Name: " + rs.getString(5));

				System.out.println("------------------");
			}

		} catch (Exception e) {
			System.out.println("-- Failed due to " + e);
		}

	}

}
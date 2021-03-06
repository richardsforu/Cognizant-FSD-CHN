package com;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Test {

	public static void main(String[] args) {
		
		// 1. Load config file
		Configuration cfg=new Configuration();
		cfg.configure("hibernate.cfg.xml");
		
		// 2. Create Session Factory object
		
		SessionFactory sf=cfg.buildSessionFactory();
		
		// 3. Create a session from session factory
		
		Session ses=sf.openSession();
		
		
		Person p=new Person();
		p.setPersonId(10);
		p.setPersonName("Ozvitha");
		p.setAge(26);
		
		
		ses.save(p);
		
		ses.beginTransaction().commit();
		
		System.out.println("--- record saved");
		
		
		
		
		
		
		
	}

}

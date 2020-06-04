package com.este.conf.model;

import javax.persistence.Entity;

@Entity
public class Listener extends Person {


	
	public Listener() {
		// TODO Auto-generated constructor stub
	}

	public Listener(int idPerson, String title, String firstName, String middleName, String lastName, Byte[] photo,
			String organizationName, String country, String region, String phone, String email, String password) {
		super(idPerson, title, firstName, middleName, lastName, photo, organizationName, country, region, phone, email,
				password);
		// TODO Auto-generated constructor stub
	}

	
	
}

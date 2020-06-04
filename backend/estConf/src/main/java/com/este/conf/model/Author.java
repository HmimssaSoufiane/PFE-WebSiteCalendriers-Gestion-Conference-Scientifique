package com.este.conf.model;

import java.util.SortedSet;
import java.util.TreeSet;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

@Entity
public class Author extends Person {



	@OneToMany(mappedBy = "author")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private SortedSet<Article> articles = new TreeSet<>();
	

	public Author() {
		// TODO Auto-generated constructor stub
	}
	
	public Author(int idPerson, String title, String firstName, String middleName, String lastName, Byte[] photo,
			String organizationName, String country, String region, String phone, String email, String password) {
		super(idPerson, title, firstName, middleName, lastName, photo, organizationName, country, region, phone, email,
				password);
		// TODO Auto-generated constructor stub
	}

	public SortedSet<Article> getArticles() {
		return articles;
	}

	public void setArticles(SortedSet<Article> articles) {
		this.articles = articles;
	}
}

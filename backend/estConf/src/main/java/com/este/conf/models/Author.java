package com.este.conf.models;

import java.util.Set;
import java.util.TreeSet;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

@Entity
public class Author extends Person implements Comparable<Author>{



	@OneToMany(mappedBy = "author")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private Set<Article> articles = new TreeSet<>();
	

	public Author() {
		// TODO Auto-generated constructor stub
	}

	public Author(int idPerson, String title, String firstName, String middleName, String lastName, String accountType,
			Byte[] photo, String organizationName, String country, String region, String phone, String email,
			String password) {
		super(idPerson, title, firstName, middleName, lastName, accountType, photo, organizationName, country, region, phone,
				email, password);
		// TODO Auto-generated constructor stub
	}

	public Set<Article> getArticles() {
		return articles;
	}

	public void setArticles(Set<Article> articles) {
		this.articles = articles;
	}

	@Override
	public int compareTo(Author o) {
		if (this.getIdPerson() != o.getIdPerson())
			return 1;
		return 0;
	}

}

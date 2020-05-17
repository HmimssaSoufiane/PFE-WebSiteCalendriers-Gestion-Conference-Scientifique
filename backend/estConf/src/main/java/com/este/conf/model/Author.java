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

	@OneToMany(mappedBy = "Author")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private SortedSet<Article> articles = new TreeSet<>();
	
	

}

package com.este.conf.model;

import java.util.SortedMap;
import java.util.SortedSet;
import java.util.TreeMap;
import java.util.TreeSet;

import javax.persistence.Entity;
import javax.persistence.MapKey;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

@Entity
public class Chair extends Person {
	
	@OneToMany(mappedBy = "Chair")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private SortedSet<Conference> createdConferences = new TreeSet<>();
	
	@OneToMany(mappedBy = "Chair")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	@MapKey(name = "article")
	private SortedMap<Conference, ChairRole> chairConferenesRole = new TreeMap<>();
}

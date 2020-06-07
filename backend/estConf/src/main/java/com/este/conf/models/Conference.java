package com.este.conf.models;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

@Entity
public class Conference {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idConference;
	private String name;
	private String shortName;
	private String location;
	private String about;
	private String theme;
	private Date dateStar;
	private Date dateEnd;
 	
	@OneToMany(mappedBy = "conference")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private SortedSet<Article> articles = new TreeSet<>();
	
	@OneToMany(mappedBy = "conference")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private SortedSet<Planning> plannings = new TreeSet<>();
		
	@OneToMany(mappedBy = "conference", orphanRemoval = true)
	@Cascade(value = { CascadeType.ALL })
	private SortedSet<ChairRole> chairsRoles = new TreeSet<>();

	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="idPerson")
	private Chair creator;
	
    @ManyToMany
    @Cascade(value = { CascadeType.ALL })
    @JoinTable(
        name = "conference_sponsor", 
        joinColumns = { @JoinColumn(name = "idConference") }, 
        inverseJoinColumns = { @JoinColumn(name = "idSponsor") }
    )
    Set<Sponsor> sponsors = new HashSet<>();
	
	public Conference () {}

	public Conference(int idConference, String name, String shortName, String location, String about, String theme,
			Date dateStar, Date dateEnd) {
		super();
		this.idConference = idConference;
		this.name = name;
		this.shortName = shortName;
		this.location = location;
		this.about = about;
		this.theme = theme;
		this.dateStar = dateStar;
		this.dateEnd = dateEnd;
	}



	public int getIdConference() {
		return idConference;
	}

	public void setIdConference(int idConference) {
		this.idConference = idConference;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getShortName() {
		return shortName;
	}

	public void setShortName(String shortName) {
		this.shortName = shortName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getTheme() {
		return theme;
	}

	public void setTheme(String theme) {
		this.theme = theme;
	}

	public Date getDateStar() {
		return dateStar;
	}

	public void setDateStar(Date dateStar) {
		this.dateStar = dateStar;
	}

	public Date getDateEnd() {
		return dateEnd;
	}

	public void setDateEnd(Date dateEnd) {
		this.dateEnd = dateEnd;
	}

	public SortedSet<Article> getArticles() {
		return articles;
	}

	public void setArticles(SortedSet<Article> articles) {
		this.articles = articles;
	}

	public SortedSet<Planning> getPlannings() {
		return plannings;
	}

	public void setPlannings(SortedSet<Planning> plannings) {
		this.plannings = plannings;
	}

	public Set<ChairRole> getChairsRoles() {
		return chairsRoles;
	}

	public void setChairsRoles(SortedSet<ChairRole> chairsRoles) {
		this.chairsRoles = chairsRoles;
	}

	public Chair getCreator() {
		return creator;
	}

	public void setCreator(Chair creator) {
		this.creator = creator;
	}

	public Set<Sponsor> getSponsors() {
		return sponsors;
	}

	public void setSponsors(Set<Sponsor> sponsors) {
		this.sponsors = sponsors;
	}

	
}

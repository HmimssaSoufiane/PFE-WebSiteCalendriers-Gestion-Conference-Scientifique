package com.este.conf.models;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.SortNatural;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Conference implements Comparable<Conference> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idConference;
	private String name;
	private String shortName;
	private String contry;
	private String city;
	private String adress;
	@Lob
	@Column(length = 100000)
	private String about;
	private String disciplines;
	private Date dateStar;
	private Date dateEnd;

	@OneToMany(mappedBy = "conference")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private Set<Article> articles;

	@OneToMany(mappedBy = "conference")
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private Set<Planning> plannings ;

	@OneToMany(mappedBy = "conference", orphanRemoval = true)
	@Cascade(value = { CascadeType.ALL })
	@SortNatural
	private Set<ChairRole> chairsRoles;

	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name = "idCreator")
	@JsonIgnoreProperties("createdConferences")
	private Chair creator;

	@ManyToMany
	@Cascade(value = { CascadeType.ALL })
	@JoinTable(name = "conference_sponsor", joinColumns = { @JoinColumn(name = "idConference") }, inverseJoinColumns = {
			@JoinColumn(name = "idSponsor") })
	@SortNatural
	public Set<Sponsor> sponsors ;

	public Conference() {
	}

	public Conference(int idConference, String name, String shortName, String contry, String city, String adress,
			String about, String disciplines, Date dateStar, Date dateEnd) {
		super();
		this.idConference = idConference;
		this.name = name;
		this.shortName = shortName;
		this.contry = contry;
		this.city = city;
		this.adress = adress;
		this.about = about;
		this.disciplines = disciplines;
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

	public String getContry() {
		return contry;
	}

	public void setContry(String contry) {
		this.contry = contry;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getDisciplines() {
		return disciplines;
	}

	public void setDisciplines(String disciplines) {
		this.disciplines = disciplines;
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

	public Set<Article> getArticles() {
		return articles;
	}

	public void setArticles(Set<Article> articles) {
		this.articles = articles;
	}

	public Set<Planning> getPlannings() {
		return plannings;
	}

	public void setPlannings(Set<Planning> plannings) {
		this.plannings = plannings;
	}

	public Set<ChairRole> getChairsRoles() {
		return chairsRoles;
	}

	public void setChairsRoles(Set<ChairRole> chairsRoles) {
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

	@Override
	public int compareTo(Conference o) {
		// TODO Auto-generated method stub
		return 0;
	}
	
	

}

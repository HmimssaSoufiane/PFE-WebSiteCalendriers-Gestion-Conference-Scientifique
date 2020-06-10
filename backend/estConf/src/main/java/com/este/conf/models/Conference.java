package com.este.conf.models;

import java.util.Date;
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
	private String contry;
	private String city;
	private String adress;
	private String about;
	private String disciplines;
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
	@SortNatural
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
    @SortNatural
    public SortedSet<Sponsor> sponsors = new TreeSet<>();
	
	public Conference () {}
	
	public Conference(int idConference, String name, String shortName, String contry, String city, String adress,
			String about, String disciplines, Date dateStar, Date dateEnd, SortedSet<Article> articles,
			SortedSet<Planning> plannings, SortedSet<ChairRole> chairsRoles, Chair creator,
			SortedSet<Sponsor> sponsors) {
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
		this.articles = articles;
		this.plannings = plannings;
		this.chairsRoles = chairsRoles;
		this.creator = creator;
		this.sponsors = sponsors;
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
 

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
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

	public SortedSet<ChairRole> getChairsRoles() {
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

	public SortedSet<Sponsor> getSponsors() {
		return sponsors;
	}

	public void setSponsors(SortedSet<Sponsor> sponsors) {
		this.sponsors = sponsors;
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







	public String getDisciplines() {
		return disciplines;
	}







	public void setDisciplines(String disciplines) {
		this.disciplines = disciplines;
	}



	
}

package com.este.conf.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
@Entity
public class Planning {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idPlanning;
	private String event ;
	private Date dateStar;
	private Date dateEnd;
	
	@ManyToOne
	@Cascade(value = { CascadeType.SAVE_UPDATE })
	@JoinColumn(name="idConference")
	private Author conefrence;
}

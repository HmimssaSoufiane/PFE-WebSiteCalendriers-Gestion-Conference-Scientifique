package com.este.conf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.este.conf.models.Article;
import com.este.conf.models.Conference;
import com.este.conf.models.Planning;
import com.este.conf.repositories.ConferenceRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/conference")
public class ConferenceController {

	@Autowired
	ConferenceRepository conferenceRepository;
	// DaoCategorie daoCategorie;

	@GetMapping("/conferences")
	public List<Conference> getConferences() {
		return conferenceRepository.findAll();
	}

	@GetMapping("/conferences/{id}")
	public Conference getConference(@PathVariable int id) {
		return conferenceRepository.findById(id).orElse(null);
	}

	@PostMapping("/conferences")
	public @ResponseBody String addConferencer(@RequestBody Conference conference) {

		if (conference != null) {
			conferenceRepository.save(conference);
			return "Saved";
		}
		return "Errur";
	}

	@DeleteMapping("/conferences/{id}")
	public String deleteConference(@PathVariable int id) {
		conferenceRepository.deleteById(id);
		return "Done";
	}

	@PutMapping("/conferences/{id}/article")
	public String updateConference(@PathVariable int id, @RequestBody Article article) {
		Conference conference = conferenceRepository.findById(id).orElse(null);
		if (conference != null) {
			conference.getArticles().add(article);
			conferenceRepository.save(conference);
			return "Done";
		}

		return "not found";
	}
	
	@PutMapping("/conferences/{id}/planning")
	public Conference updateConference(@PathVariable int id, @RequestBody Planning planning ) {
		Conference conference = conferenceRepository.findById(id).orElse(null);
		if (conference != null) {
			
			/* Working */
			planning.setConference(conference);
			conference.getPlannings().add(planning);			
			conferenceRepository.save(conference);
			
			return conference ;
		}

		return null;
	}
}

package com.este.conf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.este.conf.models.Conference;
import com.este.conf.repositories.ConferenceRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/conference")
public class ConferenceController {
	
	@Autowired
	ConferenceRepository conferenceRepository;
	//DaoCategorie daoCategorie;

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
}

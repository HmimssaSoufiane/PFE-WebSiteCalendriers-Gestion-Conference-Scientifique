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
import org.springframework.web.bind.annotation.RestController;

import com.este.conf.models.Article;
import com.este.conf.models.Author;
import com.este.conf.models.Conference;
import com.este.conf.repositories.AuthorRepository;
import com.este.conf.repositories.ConferenceRepository;
import com.este.conf.repositories.ArticleRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/author")
public class AuthorController {

	@Autowired
	AuthorRepository authorRepository;
	@Autowired
	ArticleRepository articleRepository;
	@Autowired
	ConferenceRepository conferenceRepository;

	@GetMapping("/authors")
	public List<Author> getauthors() {
		return authorRepository.findAll();
	}

	@GetMapping("/authors/{id}")
	public Author getauthor(@PathVariable int id) {
		return authorRepository.findById(id).orElse(null);
	}

	@PostMapping("/authors")
	public String addauthor(@RequestBody Author author) {
		if (author != null) {
			authorRepository.save(author);
			return "Saved";
		}

		return "Errur";
	}

	@DeleteMapping("/authors/{id}")
	public String deleteauthor(@PathVariable int id) {
		authorRepository.deleteById(id);
		return "Done";
	}

	// ----
	@PutMapping("/authors/{idAuthor}/{idConference}/article")
	public Conference updateConference(@PathVariable int idAuthor, @PathVariable int idConference,@RequestBody Article article) {
		
		Author author = authorRepository.findById(idAuthor).orElse(null);
		Conference conference = conferenceRepository.findById(idConference).orElse(null);

		if (author != null && conference != null) {
			article.setAuthor(author);
			article.setConference(conference);
			author.getArticles().add(article);
			authorRepository.save(author);
			return conference;
		}

		return null;
	}

}

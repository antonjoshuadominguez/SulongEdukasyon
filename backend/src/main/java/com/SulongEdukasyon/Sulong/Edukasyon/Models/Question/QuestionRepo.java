package com.SulongEdukasyon.Sulong.Edukasyon.Models.Question;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepo extends JpaRepository<QuestionEntity, Long> {
    QuestionEntity findByQuestionText(String questionText);
}

package com.SulongEdukasyon.Sulong.Edukasyon.Models.Question;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.Activity.ActivityEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "questions", schema = "public")
@NoArgsConstructor
@AllArgsConstructor
@Getter 
@Setter
public class QuestionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long questionId;

    @ManyToOne
    @JoinColumn(name = "activity_id", nullable = false)
    private ActivityEntity activity;

    private String questionText;
    private String questionType;  // (e.g., multiple choice, true/false, etc.)
    private String choices;  // Can store options as a JSON or comma-separated values
    private String correctAnswer;

    public QuestionEntity(ActivityEntity activity, String questionText, String questionType, String choices, String correctAnswer) {
        this.activity = activity;
        this.questionText = questionText;
        this.questionType = questionType;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }
}

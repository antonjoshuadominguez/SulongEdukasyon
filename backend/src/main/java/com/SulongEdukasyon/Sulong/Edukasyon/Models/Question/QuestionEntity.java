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
    private long questionID;

    @ManyToOne
    @JoinColumn(name = "activityID", nullable = false)
    private ActivityEntity activity;

    private String questionText;
    private String questionType;
    private String choices;
    private String correctAnswer;

    public QuestionEntity(ActivityEntity activity, String questionText, String questionType, String choices, String correctAnswer) {
        this.activity = activity;
        this.questionText = questionText;
        this.questionType = questionType;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }
}

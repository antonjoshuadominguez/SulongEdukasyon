package com.SulongEdukasyon.Sulong.Edukasyon.Models.Leaderboard;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LeaderboardRepo extends JpaRepository<LeaderboardEntity, Long> {
    LeaderboardEntity findByRoomRoomIdAndStudentStudentId(long roomId, long studentId);
}

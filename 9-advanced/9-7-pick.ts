{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://...',
            data: 'byte-data..',
        };
    }

    // ✨ Video 전체가 아닌 일부만 반환하는 경우
    type VideoMetadata = Pick<Video, 'id' | 'title'>;

    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id,
            title: 'title',
        };
    }
}

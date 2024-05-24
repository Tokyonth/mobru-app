import 'package:fluent_ui/fluent_ui.dart';
import 'package:miru_app/data/services/extension_helper.dart';
import 'package:miru_app/models/extension.dart';
import 'package:super_paging/super_paging.dart';

class ComicMortySource extends PagingSource<int, String> {
  var _loadKey = 1;

  ComicMortySource({
    required this.extension,
    required this.playList,
    required this.startPage,
    required this.mangaWatch,
    required this.pageWatch,
  }) {
    if (startPage > 0) {
      _loadKey = startPage;
    }
  }

  final ValueChanged<int> pageWatch;
  final ValueChanged<ExtensionMangaWatch> mangaWatch;
  final Extension extension;
  final List<ExtensionEpisode> playList;
  final int startPage;

  @override
  Future<LoadResult<int, String>> load(LoadParams<int> params) async {
    try {
      var currentPlayUrl = playList[_loadKey].url;
      var result = await ExtensionHelper(extension).watch(currentPlayUrl)
          as ExtensionMangaWatch;
      var list = [
        if (_loadKey > 1) "[next_chapter] ${playList[_loadKey - 1].name}",
        ...result.urls,
        "[last_chapter] ${playList[_loadKey - 1].name}"
      ];
      mangaWatch.call(result);
      pageWatch.call(_loadKey);
      return LoadResult.page(
        nextKey: _loadKey++,
        items: list,
      );
    } catch (e) {
      return LoadResult.error(e);
    }
  }
}

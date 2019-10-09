# CommonWXComponents
微信高效有效动画控件  

 
wxs事件
====  
https://developers.weixin.qq.com/miniprogram/dev/framework/view/interactive-animation.html  
(1) z-move-delete 是基于(wxs)左(右)滑删除控件，不会导致滑动时会卡顿问题  
(2) z-move-menu 是基于(wxs)左滑出菜单控件  

组件间关系
====  
https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/relations.html  
z-group 是根据微信文档组件间关系处理一些共有的处理是包裹在 z-move-delete 或者 z-move-menu 控件内的, 可以有效处理因页面滚动导致的事件冲突。

Demo
====
		<!-- ZMoveDelete 用法 -->
		<z-group>
		    <z-move-delete catch:delete="listener">
		      <view style="width: 100%; height: 80rpx;">请左右滑动我</view>
		    </z-move-delete>
		</z-group>

		<!-- ZMoveMenu用法 -->  
		<z-group>
		    <z-move-menu menuWidth="128"> 
		      <view slot="main" style="width: 100%; height: 80rpx; background: white;"> 
		          我是Main
		      </view>
		      <view slot="menu" style="width: 128rpx; height: 100%; background: red;">
		          我是Menu
		      </view>			
		    </z-move-menu>
		</z-group>
